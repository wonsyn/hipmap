package com.hipmap.domain.shorts;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum FileType {
    image, video, voice;

    @JsonCreator
    public static FileType from(String s){
        return FileType.valueOf(s);
    }
}
