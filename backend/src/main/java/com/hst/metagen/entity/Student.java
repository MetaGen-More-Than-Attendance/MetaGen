package com.hst.metagen.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.LinkedList;

@Data
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    private String surname;

    private String identityNumber;

    private String password;

    private String facePhoto;

    @ManyToMany
    private LinkedList<Lecture> takenLectures;
}
