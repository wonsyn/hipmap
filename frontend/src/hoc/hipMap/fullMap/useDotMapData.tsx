import { useQuery } from "@tanstack/react-query";
import http from "../../../utils/http-commons";

interface useDotMapDataProps{
    queryKey: string
    uri: string
    startLat: number
    endLat: number
    startLng: number
    endLng: number
}

export function useDotMapData({queryKey, uri, startLat, endLat, startLng, endLng}: useDotMapDataProps){
    return useQuery([queryKey, startLat, endLat, startLng, endLng ],
        async () => {
            const response = await http.get(uri,{
                params: {
                    startLat: startLat,
                    endLat: endLat,
                    startLng: startLng,
                    endLng: endLng
                }
            })
            console.log(response)
            return response.data
        }, 
        {refetchOnWindowFocus: false,
        onError: (error) => {console.log(error)}}            
    )
}