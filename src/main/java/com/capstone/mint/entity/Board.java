package com.capstone.mint.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table (name = "board")
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter @ToString
public class Board {

    @Id // Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "board_id")
    private Long board_id;

    @Column (name = "board_writer")
    private String board_writer;

    @Column (name = "board_title")
    private String board_title;

    @Column (name = "board_content")
    private String board_content;

    @Column (name = "board_regdate")
    private String board_regdate;

    @Column (name = "board_updatedate")
    private String board_updatedate;

    @Column (name = "board_deletedate")
    private String board_deletedate;

}