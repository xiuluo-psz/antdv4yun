<script>
  /* eslint-disable */
  import Vue from 'vue'
  import T from 'ant-design-vue/lib/table/Table'
  import { mapActions } from 'vuex'
  import table from '../../store/modules/table'

  const selectionKey = 'selection-column'
  const cusPagination = {
    current: 1,
    pageSize: 10,
    pageSizeOptions: ['10', '20', '30', '50'],
    showTotal: (total, range) => {
      return '共' + total + '条'
    },
    showQuickJumper: true,
    showSizeChanger: true,
    total: 0
  }

  export default {
    name: 'CTable',
    props: Object.assign({}, T.props, {
      id: {
        type: String,
        default: ''
      },
      dataLoad: {
        type: Function,
        required: false
      },
      autoLoad: {
        type: Boolean,
        default: false
      },
      pageNum: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      },
      showSizeChanger: {
        type: Boolean,
        default: true
      },
      allowResizable: {
        type: Boolean,
        default: false
      },
      showCusPagination: {
        type: Boolean,
        default: false
      },
      autoWrap: {
        type: Boolean,
        default: false
      },
      noLoading: {
        type: Boolean,
        default: false
      }
    }),
    data() {
      return {
        selectionWidth: 60,
        localLoading: false,
        localDataSource: [],
        cusPagination,
        localPagination: Object.assign({}, this.pagination),
        localSorter: null
      }
    },
    created() {
      if (this.autoLoad) {
        this.load()
      }
    },
    methods: {
      ...mapActions(['setResizeColumns']),

      /**
       * 表格加载方法(强制刷新到第一页)
       */
      load() {

        // 设置每页条数
        if (!this.localPagination.pageSize) {
          this.cusPagination.pageSize = 10
        }

        this.cusPagination.current = 1
        this.localPagination = Object.assign({}, this.cusPagination)
        this.localSorter = null
        this.loadData()
      },

      /**
       * 表格加载方法(跳转到指定页面)
       */
      loadToPage(para) {
        // 设置页数
        this.cusPagination.current = para.pageNo || 1
        // 设置每页条数
        this.cusPagination.pageSize = para.pageSize || 10
        this.localPagination = Object.assign({}, this.cusPagination)
        this.localSorter = null
        this.loadData()
      },

      /**
       * 表格刷新（刷新当前页面）
       */
      refresh() {
        this.loadData()
      },
      /**
       * 表格清空
       */
      clear() {
        this.localDataSource = []
      },
      /**
       * 加载数据方法
       * @param {Object} pagination 分页选项器
       * @param {Object} filters 过滤条件
       * @param {Object} sorter 排序条件
       */
      loadData(pagination, filters, sorter) {

        // console.log(this.dataLoad)

        if(this.dataLoad) {
          if (!this.noLoading) {
            this.localLoading = true
            this.$store.dispatch('loading', true)
          }

          if (sorter !== undefined) {
            this.localSorter = sorter
          }

          if (sorter === undefined && this.localSorter !== undefined && this.localSorter !== null) {
            sorter = this.localSorter
          }

          const parameter = Object.assign({
              pageNo: (pagination && pagination.current) || this.localPagination.current || this.pageNum,
              pageSize: (pagination && pagination.pageSize) || this.localPagination.pageSize || this.pageSize
            },
            (sorter && sorter.field && sorter.order && {
              sortField: sorter.field
            }) || {},
            (sorter && sorter.order && {
              sortOrder: sorter.order
            }) || {},
            {
              ...filters
            }
          )

          this.cusPagination.pageSize = parameter.pageSize

          const result = this.dataLoad(parameter)
          // 对接自己的通用数据接口需要修改下方代码中的 r.pageNo, r.totalCount, r.data
          // eslint-disable-next-line
          if ((typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function') {
            result.then(r => {
              if (r) {
                this.localPagination = Object.assign({}, this.localPagination, {
                  current: r.pageNo, // 返回结果中的当前分页数
                  total: r.totalCount, // 返回结果中的总记录数
                  showSizeChanger: this.showSizeChanger,
                  pageSize: (pagination && pagination.pageSize) ||
                    this.localPagination.pageSize
                }) || false
                // 为防止删除数据后导致页面当前页面数据长度为 0 ,自动翻页到上一页
                if (r.data.length === 0 && this.localPagination.current > 1) {
                  this.localPagination.current--
                  this.loadData()
                  return
                }

                this.localDataSource = r.data // 返回结果中的数组数据
              } else {
                this.localDataSource = [] // 返回结果中的数组数据
              }

              // 这里用于判断接口是否有返回 r.totalCount 且 pageNo 和 pageSize 存在 且 totalCount 小于等于 pageNo * pageSize 的大小
              // 当情况满足时，表示数据不满足分页大小，关闭 table 分页功能
              // try {
              //   if ((r.totalCount <= (r.pageNo * this.localPagination.pageSize))) {
              //     this.localPagination.hideOnSinglePage = true
              //   }
              // } catch (e) {
              //   this.localPagination = false
              // }
            }).finally(() => {
              if (!this.noLoading) {
                this.localLoading = false
                this.$store.dispatch('loading', false)
              }
            })
          }
        }
      },

      /**
       * 切换每页条数
       */
      onShowSizeChange(current, size) {
        this.localPagination.pageSize = size
        this.loadData()
      },
      /**
       * 分页事件
       */
      onChange(page, pageSize) {
        this.localPagination.current = page
        this.localPagination.pageSize = pageSize
        this.loadData()
      }
    },
    render () {
      // 检查id
      if (!this.id) {
        console.error('请设置 id, 同一个页面id不能重复！')
      }

      // 处理 columns
      const draggingMap = {}
      const sortMap = {}
      let columns = this.columns
      this.setResizeColumns({ id: this.id, cols: columns })

      // 检查 columns
      columns.forEach((col) => {
        const k = col.dataIndex || col.key
        draggingMap[k] = col.width
        sortMap[k] = col.sorter
        if(!this.autoWrap) { //自动换行不显示...
          col.ellipsis = true
        }

        if (!k) {
          console.error('请设置 dataIndex 或者 key 其中一个属性')
        }

        if (this.scroll && this.scroll.x) {
          // if (!col.width) {
          //   console.error('包含scroll.x 所有列都必须设置 width 属性（包括最后一列）')
          // }
        } else {
          // if (col === columns[columns.length - 1] && col.width) {
          //   console.error('不包含scroll.x 最后一列不能设置 width 属性')
          // }

          // if (col !== columns[columns.length - 1] && !col.width) {
          //   console.error('请设置 width 属性（最后一列不用设置 width 属性）')
          // }
        }
      })
      const draggingState = Vue.observable(draggingMap)
      // columns 伸缩组件
      const resizeableTitle = (h, props, children) => {
        let thDom = null

        // 由于v-if 导致 columns 获取失败，改为通过vuex 重新获取 columns
        columns = table.state.resizeColMap.get(this.id)

        const { key, ...restProps } = props
        let col = columns.find((col) => {
          const k = col.dataIndex || col.key
          return k === key
        })

        // 选择框设置宽度
        if (props.key === selectionKey) {
          col = {
            key: selectionKey,
            width: 60
          }
        }

        if (!col.width) {
          return <th {...restProps}>{children}</th>
        }

        // 伸缩事件
        const onDrag = (x) => {
          draggingState[key] = 0
          col.width = Math.max(x, 1)
          if (key === selectionKey) {
            this.selectionWidth = col.width
          }
          // 防止伸缩过程中 出发排序事件
          col.sorter = false
        }

        // 伸缩停止
        const onDragstop = () => {
          draggingState[key] = thDom.getBoundingClientRect().width
          if (key === selectionKey) {
            this.selectionWidth = draggingState[key]
          }
          col.sorter = sortMap[key]
        }

        // 重绘th
        return (
          <th {...restProps} v-ant-ref={(r) => (thDom = r)} width={draggingState[key]} class="resize-table-th" >
          {children}
          <vue-draggable-resizable
        key={col.dataIndex || col.key}
      class="table-draggable-handle"
        w={10}
        x={ col.width || draggingState[key] }
        z={1}
        axis="x"
        draggable={true}
        resizable={false}
        onDragging={onDrag}
        onDragstop={onDragstop}
          ></vue-draggable-resizable>
          </th>
      )
      }

      // table属性
      const tableProps = {}
      Object.keys(T.props).forEach(k => {
        tableProps[k] = this[k]
      })

      // 设置选择框宽度
      if (tableProps.rowSelection) {
        tableProps.rowSelection.columnWidth = this.selectionWidth
      }

      // 使用数据加载方法
      if (this.dataLoad) {
        // tableProps.loading = this.localLoading
        tableProps.dataSource = this.localDataSource

        if (this.showCusPagination) {
          tableProps.pagination = false
        } else {
          tableProps.pagination = this.localPagination
        }

      }

      // table 组件 设置 cell
      tableProps.components = {
        header: {
          cell: resizeableTitle
        }
      }

      // this.localPagination.style.display = 'none'

      const tableRender = (
        <a-table {...{ props: tableProps, scopedSlots: { ...this.$scopedSlots } }} onChange={this.loadData} onExpand={ (expanded, record) => { this.$emit('expand', expanded, record) } }>
      { Object.keys(this.$slots).map(name => (<template slot={name}>{this.$slots[name]}</template>)) }
        </a-table>
      )

        const tableAutoWrapRender = (
          <a-table class="c-autowrap" {...{ props: tableProps, scopedSlots: { ...this.$scopedSlots } }} onChange={this.loadData} onExpand={ (expanded, record) => { this.$emit('expand', expanded, record) } }>
        { Object.keys(this.$slots).map(name => (<template slot={name}>{this.$slots[name]}</template>)) }
          </a-table>
        )

        const paginationRender = (
          <a-pagination
      class="c-pagination"
        {...{ props: this.localPagination }}
        show-quick-jumper
        show-size-changer
        onChange={this.onChange}
        onShowSizeChange={this.onShowSizeChange}
        />
      )

        return (
          <div class="table-wrapper">
          { this.autoWrap ? tableAutoWrapRender : tableRender }
        { this.showCusPagination ? paginationRender : null }
      </div>
      )
      }
    }
</script>

<style lang="less">
  .resize-table-th {
    position: relative;

    .table-draggable-handle {
      height: 100% !important;
      bottom: 0;
      left: auto !important;
      right: -5px;
      cursor: col-resize;
      touch-action: none;
      position: absolute;
      transform: none !important;
      /*bottom: 0;*/

      /*transform: none !important;*/
      /*position: absolute;*/
    }
  }

  table {
    table-layout: fixed; /* 只有定义了表格的布局算法为fixed，下面td的定义才能起作用。 */
  }

  .ant-table-tbody td {
    width: 100%;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  .c-autowrap .ant-table-tbody td {
    width: 100%;
    word-break: normal; /* 不换行 */
    white-space: normal; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  .c-pagination {
    float: right;
  }
</style>
