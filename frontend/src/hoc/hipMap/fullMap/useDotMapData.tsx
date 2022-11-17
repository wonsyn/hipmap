import { useQuery } from "@tanstack/react-query";
import http from "../../../utils/http-commons";

interface useDotMapDataProps{
    queryKey: string
    uri: string
    startLat: number
    endLat: number
    startLng: number
    endLng: number
    isFilterChecked: boolean
    locationSi: string | null
    locationGu: string | null
    locationDong: string | null
}

export function useDotMapData({queryKey, uri, startLat, endLat, startLng, endLng, isFilterChecked, locationSi, locationGu, locationDong}: useDotMapDataProps){
    return useQuery([queryKey, startLat, endLat, startLng, endLng ],
        async () => {
            const response = await http.post(uri,{

                    startLat: startLat,
                    endLat: endLat,
                    startLng: startLng,
                    endLng: endLng,
                    isFilterChecked: isFilterChecked,
                    locationSi: locationSi,
                    locationGu: locationGu,
                    locationDong: locationDong
                
            })
            // console.log(response)
            return response.data
        }, 
        {refetchOnWindowFocus: false, cacheTime: 0,
        onError: (error) => {console.log(error)}}            
    )
}