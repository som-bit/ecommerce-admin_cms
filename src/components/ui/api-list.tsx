"use client";

import { ApiAlert } from "@/components/ui/Api-Alert";
import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";

//we get base url from the origin hook and store id to specify the api 
//via this we can create dynamic apis catering to all needs of a billboard

interface ApiListProps {
    entityName: string;
    entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
    entityName,
    entityIdName,
}) => {
    const params = useParams();
    const origin = useOrigin();

    const baseUrl = `${origin}/api/${params.storeId}`;


    return (
        <>
            {/*for all billboard*/}
            <ApiAlert title="GET" variant="public" description={`${baseUrl}/${entityName}`} />
            {/*for individual billboard*/}
            <ApiAlert title="GET" variant="public" description={`${baseUrl}/${entityName}/{${entityIdName}}`} />
            {/*only admins can post new route through this api*/}
            <ApiAlert title="POST" variant="admin" description={`${baseUrl}/${entityName}`} />
            <ApiAlert title="PATCH" variant="admin" description={`${baseUrl}/${entityName}/{${entityIdName}}`} />
            <ApiAlert title="DELETE" variant="admin" description={`${baseUrl}/${entityName}/{${entityIdName}}`} />
        </>
    );
};