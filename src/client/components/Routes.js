import React from 'react'
import {Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import UserListPage, {loadData} from '../pages/userListPage'

export default [
    {
        path: '/',
        ...HomePage,
        exact: true,
    },
    {
        path: '/users',
        ...UserListPage
    }
]