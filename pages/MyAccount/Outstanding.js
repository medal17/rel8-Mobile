import {Text, FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'

import {GetMyDues} from '../../connection/user.actions'
import { MoneyCard } from '../../components/account/MoneyCard'
import { set } from 'react-native-reanimated'

export const Outstanding =()=>{

    const [list, setList] =useState(null)
    const data = [
        {id:1,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:2,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:3,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:4,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:5,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:6,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:7,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        
        ]

        useEffect(()=>{
            GetMyDues(false, callback)
        }, [list])

        const callback=(res)=>{
            // console.log(res.data.data)
            setList(res.data.data)
        }

    return(
        <FlatList
            data={list}
            keyExtractor={ (item, index) => item.id }
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
            <MoneyCard
                reason={item.due__Name}
                amount={item.amount}
                date={item.date}
                type={item.is_paid}
            />
                )}
        />
    )
}