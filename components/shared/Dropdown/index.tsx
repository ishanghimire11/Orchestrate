import React, { startTransition, useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { ICategory } from '@/lib/database/models/category.model';
import { Input } from '@/components/ui/input';
import { createCategory, getAllCategories } from '@/lib/actions/category.action';
import { handleError } from '@/lib/utils';

type DropdownPropTypes = {
    value?: string,
    onChangeHandler?: (value: string) => void;
} 

const Dropdown = ({value, onChangeHandler}: DropdownPropTypes) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [newCategory, setNewCategory] = useState<string>("");

    const fetchCategories = async () => {
        try {
            const data = await getAllCategories();
            return data && setCategories(data);
        } catch (error) {
            handleError(error);
        }
    }

    useEffect(() => {
        fetchCategories();
    },[])

    const handleAddCategory = async () => {
        try {
            const res = await createCategory({categoryName: newCategory.trim()});
            return setCategories((prev) => [...prev, res]);
            
        } catch(error) {
            handleError(error);
        } 
    };
    
    return (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            
            <SelectContent>
                {
                    categories.length > 0 && categories.map(category => {
                        return <SelectItem key={category._id} value={category._id} className=''>{category.name}</SelectItem>
                    })
                }
                <AlertDialog>
                    <AlertDialogTrigger className='pl-4 font-bold text-md text-blue-500 py-2'>Add new Category</AlertDialogTrigger>
                        <AlertDialogContent className='bg-white'>
                            <AlertDialogHeader>
                           
                            <AlertDialogTitle className='mb-8'>Add an Event Category</AlertDialogTitle>
                            
                            <AlertDialogDescription>
                                <Input required={true} type='text' placeholder='Category name' className='pl-4 text-black' value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                            </AlertDialogDescription>
                            
                            </AlertDialogHeader>
                            
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction 
                                onClick={() => startTransition(() => {
                                                handleAddCategory();
                                                return undefined;
                                            }
                                        )}
                                className='bg-blue-500 hover:bg-blue-600 font-semibold text-white'>Save</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                </AlertDialog>
            </SelectContent>
        </Select>
  )
}

export default Dropdown