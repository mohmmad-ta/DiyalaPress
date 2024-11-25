import {ref, computed, onMounted} from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useDataStore = defineStore('data', () => {
  const allNews = ref([])
  const openForm = ref(0)
  const scrollStatus = ref(false)
  const complaintData = ref({
    name: null,
    mobile: null,
    subject: null,
    description: null,
    location: null,
    gps: null,
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
    allNews.value.push(...data.data)
    data.data[0] === undefined ? scrollStatus.value = false : scrollStatus.value = true
  }
  onMounted(async ()=>{await getIndexNews(1)})


  return { getIndexNews, allNews, complaintData, scrollStatus, openForm }
})