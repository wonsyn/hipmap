import { useQuery } from "@tanstack/react-query";
import http from "../../../utils/http-commons";

interface useSiProps{
    queryKey: string
    uri: string
}

export function useSi({queryKey, uri}: useSiProps){
    return useQuery([queryKey],
        async () => {
            const response = await http.get(uri,{
            })
            // console.log(response)
            return response.data
        }, 
        {refetchOnWindowFocus: false,
        onError: (error) => {console.log(error)}}            
    )
}