"use client"

import React, { useState } from 'react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import EventformSchema  from '@/lib/validator'
import { EventFormDefaultValues } from '@/constants'
import Dropdown from '../Dropdown'
import FileUploader from '../FileUploader'
import { Calendar, DollarSign, Link, MapPinIcon, SplineIcon } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'

const EventForm = ({userId, type}: {userId: String, type: "create" | "update"}) => {
    const [files, setFiles] = useState<File[]>([]);
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
                            <Input placeholder="Title" {...field} id="title"/>
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
                            <Dropdown onChangeHandler={field.onChange} value={field.value} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>

                <div className='flex flex-col gap-8 md:flex-row'>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({field }) => (
                        <FormItem className='w-full'>
                            <FormControl className='h-72'>
                                    <Textarea placeholder="Event Description (Max 400 words.)" {...field} className='w-full block resize-none' id='description'/>
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
                                <FileUploader 
                                onFieldChange={field.onChange} 
                                imageUrl={field.value}
                                setFiles = {setFiles}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
            <div className='flex flex-col gap-8 md:flex-row'>
            <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormControl>
                            <div className='flex items-center relative'>
                                <MapPinIcon className='text-neutral-500 absolute left-2' width={20} height={20}/>
                                <Input placeholder="Location" {...field} className='pl-10' id='location'/>
                            </div>
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                    )}
                />
            <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormControl>
                            <div className='flex items-center relative'>
                                <DollarSign className='text-neutral-500 absolute left-2' width={20} height={20}/>
                                
                                <Input type='number' placeholder="Price" {...field} className='pl-10 pr-24' id='price'/>
                                
                                <FormField
                                    control={form.control}
                                    name="isFree"
                                    render={({ field }) => (
                                        <FormItem className='absolute right-4'>
                                            <FormControl>
                                                <div className='flex item-center'>
                                                    <label htmlFor="isFree" className='whitespace-nowrap pr-3 leading-none peer-disabled cursor-not-allowed peer-disabled:opacity:60'>Free</label>
                                                    
                                                    <Checkbox id="isFree"/>
                                                </div>
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                            )}
            />
            
            </div>
            <div className='flex flex-col gap-8 md:flex-row'>
            <FormField
                    control={form.control}
                    name="startDateTime"
                    render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormControl>
                            <div className='flex items-center relative border border-gray-200 rounded-md py-2 px-2'>
                                <Calendar className='text-neutral-500' width={18} height={18} />
                                <span className='text-neutral-500 pl-2'>Start Date:</span>
                                <DatePicker id="startDateTime" selected={field.value} onChange={(date: Date) => field.onChange(date)} showTimeSelect timeInputLabel='Time:' dateFormat={"MM/dd/yyyy h:mm aa"}/>
                            </div>
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="endDateTime"
                    render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormControl>
                            <div className='flex items-center relative border border-gray-200 rounded-md py-2 px-2'>
                                <Calendar className='text-neutral-500' width={18} height={18} />
                                <span className='text-neutral-500 pl-2'>End Date:</span>
                                <DatePicker selected={field.value} onChange={(date: Date) => field.onChange(date)} showTimeSelect timeInputLabel='Time:' dateFormat={"MM/dd/yyyy h:mm aa"} id='endDateTime'/>
                            </div>
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                    )}
                />  
            </div>
            
            <div className='flex flex-col gap-8 md:flex-row'>
                <FormField
                        control={form.control}
                        name="eventUrl"
                        render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl>
                                <div className='flex items-center relative'>
                                    <Link className='text-neutral-500 absolute left-2' width={20} height={20}/>
                                    <Input id='eventUrl' placeholder="Event URL" {...field} className='pl-10'/>
                                </div>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                        )}
                    />
            </div>
            <Button type="submit"size={'lg'} className='md:w-fit  bg-blue-500 hover:bg-blue-600 text-white font-semibold' disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? (`${<SplineIcon /> } Submitting...`) : (<span className='capitalize font-semibold'>{`${type} Event`}</span>) }</Button>
        </form>
  </Form>
  )
}

export default EventForm