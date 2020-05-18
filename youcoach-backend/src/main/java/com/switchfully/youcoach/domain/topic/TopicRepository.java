package com.switchfully.youcoach.domain.topic;

import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface TopicRepository extends CrudRepository<Topic, UUID> {
}
