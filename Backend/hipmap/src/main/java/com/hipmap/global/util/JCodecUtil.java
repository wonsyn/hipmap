package com.hipmap.global.util;

import lombok.extern.slf4j.Slf4j;
import org.jcodec.api.FrameGrab;
import org.jcodec.api.JCodecException;
import org.jcodec.common.model.Picture;
import org.jcodec.scale.AWTUtil;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

@Slf4j
public class JCodecUtil {
    private static final String IMAGE_PNG_FORMAT = "png";

    public static File getThumbnail(File source, File thumbnail) throws IOException, JCodecException {
        log.debug("extracting thumbnail from video");
        int frameNumber = 0;
        log.debug("thumbnail name: " + thumbnail.getName());
        Picture picture = FrameGrab.getFrameFromFile(source, frameNumber);

        BufferedImage bufferedImage = AWTUtil.toBufferedImage(picture);
        ImageIO.write(bufferedImage, IMAGE_PNG_FORMAT, thumbnail);
        return thumbnail;
    }
}
