package com.switchfully.youcoach.domain.sessions;

import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface CoachingSessionRepository extends CrudRepository <CoachingSession, UUID> {
}
