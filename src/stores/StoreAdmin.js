import {ref, computed, onMounted} from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useAdminStore = defineStore('admin', () => {
  const slidOpen = ref(true)
  const dashStep = ref(1)
  const openForm = ref(0)
  const notifications = ref()
  const alert = ref({
    id: "",
    open: false,
    title: "",
    description: "",
    number: 0
  })
  const allNews = ref([])
  const allContactUs = ref([])
  const newsData = ref({
    title : "",
    content : "",
    sendNoifyForGuest : false,
    image: null,
  })
  const contactUsData = ref({
    mobile: null,
    message: null,
  })
  const scrollStatusNews = ref(false)
  const scrollStatusContactUs = ref(false)


  const getIndexNews = async (page,category, sort_by, search)=>{
    const {data} = await axios.get(`api/news`, {
      params: {
        page: page,
        category: category,
        sort_by: sort_by,
        search: search,
      }
    })
    allNews.value.push(...data.data)
    data.data[0] === undefined ? scrollStatusNews.value = false : scrollStatusNews.value = true

  }
  onMounted(async ()=>{await getIndexNews(1)})

  const getIndexContactUs = async (page, category, sort_by, search)=>{
    const {data} = await axios.get(`api/admin/contactUs`, {
      params: {
        page: page,
        category: category,
        sort_by: sort_by,
        search: search,
      }
    })
    allContactUs.value.push(...data.data)
    data.data[0] === undefined ? scrollStatusContactUs.value = false : scrollStatusContactUs.value = true

  }
  onMounted(async ()=>{await getIndexContactUs(1)})


  const getShowNews = async ()=>{
    const {data} = await axios.get(`api/news`)
    newsData.value = data.data
  }

  const formPostNews = async () =>{
    const {data} = await axios.post(`api/news`, newsData.value)
    return data
  }

  const formPutNews = async (id) =>{
    const {data} = await axios.put(`api/news/${id}`, newsData.value)
    return data
  }

  const formDeleteNews = async (id) =>{
    const {data} = await axios.delete(`api/news/${id}`)
    return data
  }

  return { contactUsData, notifications, getIndexNews, allNews, newsData, formPostNews ,getShowNews, formPutNews, formDeleteNews, alert, dashStep, openForm, slidOpen, allContactUs, getIndexContactUs, scrollStatusNews, scrollStatusContactUs }
})
