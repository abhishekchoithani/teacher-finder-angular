package com.example.teacherfinder.service;

import com.example.teacherfinder.model.Authority;
import com.example.teacherfinder.model.Users;
import com.example.teacherfinder.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.management.relation.Role;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepository.findByEmail(username);
        if (user != null) {
            return new User(user.getEmail(), user.getPassword(), user.getIsActivated(), true,
            true, true, buildSimpleGrantedAuthorities(user.getAuthorities()));

        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }

    /**
     * returns list of simple granted authorities
     * @param  authoritySet
     * @return List<SimpleGrantedAuthority>
     */
    private static List<SimpleGrantedAuthority> buildSimpleGrantedAuthorities(final Set<Authority> authoritySet) {
        return authoritySet
                .stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getName()))
                .collect(Collectors.toList());
    }
}
