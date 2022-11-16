import { useQuery } from "@tanstack/react-query";
import http from "../../../utils/http-commons";

interface useDongProps{
    queryKey: string
    uri: string
    gugun: string

}

export function useDong({queryKey, uri, gugun}: useDongProps){
    return useQuery([queryKey, gugun],
        async () => {
            const response = await http.get(uri,{ params: {
                gugun: gugun
            }
            })
            console.log(response)
            return response.data
        }, 
        {refetchOnWindowFocus: false,
        onError: (error) => {console.log(error)}}            
    )
}