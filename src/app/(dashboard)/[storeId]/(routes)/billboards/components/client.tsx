'use client'

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Separator } from "@/components/ui/Separator";
import { DataTable } from "@/components/ui/Data-table"


import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { BillboardColumn, columns } from "./columns"
import { ApiList } from "@/components/ui/Api-list";

// interface to add data to billboard to modify the heading and manage billboard
//and add more div in the billboard page

interface BillboardClientProps {
    data: BillboardColumn[]
}

const BillboardClient: React.FC<BillboardClientProps> = ({
    data
}) => {
    const params = useParams();
    const router = useRouter();

    return (
        <>
            <div className=" flex items-center justify-between">
                <Heading
                    title={`Billboards (${data.length})`}
                    description="Manage billboards for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add new
                </Button>
            </div>
            <Separator />
            {/*the the data table component that is shown below*/}
            <DataTable columns={columns} data={data} searchKey="label" />
            <Heading title="API" description="Api Calls for billboard" />
            <Separator />
            <ApiList entityName="billboards" entityIdName="billboardId" />
        </>
    );
}

export default BillboardClient;