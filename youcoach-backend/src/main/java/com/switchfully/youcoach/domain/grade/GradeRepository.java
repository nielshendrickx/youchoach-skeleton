package com.switchfully.youcoach.domain.grade;

import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface GradeRepository extends CrudRepository<Grade, UUID> {
}
