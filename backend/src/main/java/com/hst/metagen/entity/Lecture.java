package com.hst.metagen.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.LinkedList;

@Entity
@Data
public class Lecture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToMany
    private LinkedList<Student> student;

    @ManyToOne
    private Instructor instructor;

    @OneToOne
    private Absenteeism absenteeism;
}
