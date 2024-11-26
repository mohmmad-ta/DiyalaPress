import {ref, computed, onMounted} from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useDataStore = defineStore('data', () => {
  const allNews = ref([])
  const sliderNews = ref([])
  const openForm = ref(0)
  const scrollStatus = ref(false)
  const contactUsData = ref({
    name: null,
    mobile: null,
    message: null,
  })

  const getIndexNews = async (page,category, sort_by, search)=>{
    const {data} = (await axios.get(`api/frontend/news`, {
      params: {
        page: page,
        category: category,
        sort_by: sort_by,
        search: search,
      }
    }))
    if (page === 1){
      sliderNews.value = data.data
    }
    allNews.value.push(...data.data)
    data.data[0] === undefined ? scrollStatus.value = false : scrollStatus.value = true
  }
  onMounted(async ()=>{
    await getIndexNews(1)
  })


  return { getIndexNews,sliderNews, allNews, contactUsData, scrollStatus, openForm }
})