package com.hipmap.domain.user;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
@RequiredArgsConstructor
public class RedisUtil {
    private final StringRedisTemplate redisTemplate;

    /**
     * key 입력 시, value 리턴 / value 입력 시, key 리턴
     *
     * @param key
     * @return value
     */
    public String getData(String key) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        return valueOperations.get(key);
    }

    /**
     * {key, value} 구조로 저장
     *
     * @param key
     * @param value
     */
    public void setData(String key, String value) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        valueOperations.set(key, value);
    }

    /**
     * {key, value}가 특정 유효 시간 동안만 저장되도록 함
     *
     * @param authKey  발급된 인증키
     * @param mail     전송받을 이메일
     * @param duration 유효시간
     */
    public void setDataExpire(String authKey, String mail, long duration) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        Duration expireDuration = Duration.ofSeconds(duration);
        valueOperations.set(authKey, mail, expireDuration);
    }

    /**
     * Data 삭제
     *
     * @param key 삭제할 인증키
     */
    public boolean deleteData(String key) {
        return redisTemplate.delete(key);
    }
}
