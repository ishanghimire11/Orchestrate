"use client"

import React from 'react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import EventformSchema  from '@/lib/validator'
import { EventFormDefaultValues } from '@/constants'
import Dropdown from '../Dropdown'

const EventForm = ({userId, type}: {userId: String, type: "create" | "update"}) => {

    const initialValues = EventFormDefaultValues;

    const form = useForm<z.infer<typeof EventformSchema>>({
        resolver: zodResolver(EventformSchema),
        defaultValues: initialValues
    })

    function onSubmit(values: z.infer<typeof EventformSchema >) {
        console.log(values)
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-8'>
            <div className='flex flex-col gap-8 md:flex-row'>
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormControl>
                            <Input placeholder="Title" {...field} />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="categoryId"
                    render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormControl>
                            <Dropdown onChangeHandler={field.onChange} value={field.value}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl className='h-72'>
                                <Textarea placeholder="Event Description (Max 400 words.)" {...field} className='w-full block resize-none'/>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl className='h-72'>
                                <Input type='file' />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                        )}
                    />
            </div>
            <Button type="submit" className='md:w-fit'>Submit</Button>
        </form>
  </Form>
  )
}

export default EventForm