package com.example.teacherfinder.service;

import com.example.teacherfinder.dto.UserDTO;
import com.example.teacherfinder.exception.ResourceAlreadyExistsException;
import com.example.teacherfinder.exception.ResourceNotFoundException;
import com.example.teacherfinder.model.Users;
import com.example.teacherfinder.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserService {

    private final Logger log = LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> getAllUsers() {
        log.info("[START] getAllUsers");
        List<Users> users = userRepository.findAll();
        log.info("[END] getAllUsers");
        return userListToDTOMapper(users);
    }

    public UserDTO getUserById(Long id) {
        return userToDTOMapper(userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id)));
    }

    public void saveUser(Users users) {
        if (users.getId() == null) {
            userRepository.save(users);
        } else {
            throw new ResourceAlreadyExistsException("user already have an id: " + users.getId());
        }
    }


    public UserDTO userToDTOMapper(Users user) {
        log.info("[START] user To DTO Mapper. USER : {}", user);
        UserDTO userDTO = new UserDTO();
        if (user != null) {
            BeanUtils.copyProperties(user, userDTO);
            Set<String> authorities  =new HashSet<>();
            user.getAuthorities().forEach(authority -> authorities.add(authority.getName()));
            userDTO.setAuthorities(authorities);
        }
        log.info("[END] user To DTO Mapper. UserDTO: {}", userDTO);
        return userDTO;
    }

    public List<UserDTO> userListToDTOMapper(List<Users> users) {
        log.info("[START] user list to DTO mapper");

        List<UserDTO> userDTOS = new ArrayList<>();
        UserDTO userDTO = new UserDTO();

        users.forEach(user -> {
            BeanUtils.copyProperties(user, userDTO);
            Set<String> authorities  = new HashSet<>();
            user.getAuthorities().forEach(authority -> authorities.add(authority.getName()));
            userDTO.setAuthorities(authorities);
            userDTOS.add(userDTO);
        });

        log.info("[END] user list to DTO mapper");
        return userDTOS;
    }



}
