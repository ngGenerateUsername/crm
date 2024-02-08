package com.CRM.Backend.entities.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DtoContactUpdatePassword {

    Long idUser;
    String password;


}
