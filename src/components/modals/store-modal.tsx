'use client'

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios'
import toast from 'react-hot-toast';

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/Modal";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';





// created a form with form validation with zod
const formSchema = z.object({
    name: z.string().min(1),
});

export const StroreModal = () => {
    const storeModal = useStoreModal();

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        try {
            setLoading(true);
            const response = await axios.post('/api/stores', values);
            //this will do a complete refreash of our page so no next/navigation
            window.location.assign(`/${response.data.id}`)

        }
        catch (error) {
            toast.error('Something went wrong');
        }
        finally {
            setLoading(false);
        }

    }

    return (
        <Modal
            title="Create Store"
            description="Add a new store to manage products and category"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className='space-y-4 py-2 pb-4'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder='E-Commerce' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
                                <Button variant='outline'
                                    disabled={loading}
                                    onClick={storeModal.onClose}>
                                    Cancel</Button>
                                <Button type='submit'
                                    disabled={loading}>Continue</Button>

                            </div>
                        </form>
                    </Form>

                </div>

            </div>
        </Modal>
    )
}

