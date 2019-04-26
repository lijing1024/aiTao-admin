export default {
  name: 'Categories',
  data () {
    return {
      categoriesList: [],
      reqParam: {
        query: '',
        pagenum: 1,
        pagesize: 5
      }
    }
  },
  methods: {
    // 获取所有分类数据
    async loadData () {
      const {data: {data, meta}} = await this.$axios.get('categories', {params: this.reqParam})
      if (meta.status !== 200) return this.$message.error('获取分类列表数据失败')
      this.$message.success('获取分类列表数据成功')
      this.categoriesList = data.result
    }
  },
  mounted () {
    this.loadData()
  }
}
