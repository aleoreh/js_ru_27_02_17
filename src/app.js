import React from 'react'
import {render} from 'react-dom'
import ArticleList from './components/ArticleList.jsx'
import {articles} from './fixtures'

render(<ArticleList articles={articles} />, document.getElementById('container'))
