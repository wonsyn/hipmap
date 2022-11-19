import { useQuery } from "@tanstack/react-query";
import http from "../../../utils/http-commons";

interface useGuProps{
    queryKey: string
    uri: string
    sido: string

}

export function useGu({queryKey, uri, sido}: useGuProps){
    return useQuery([queryKey, sido],
        async () => {
            const response = await http.get(uri,{ params: {
                sido: sido
            }
            })
            return response.data
        }, 
        {refetchOnWindowFocus: false,
        onError: (error) => {console.log(error)}}            
    )
}