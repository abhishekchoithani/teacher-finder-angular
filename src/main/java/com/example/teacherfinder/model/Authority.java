package com.example.teacherfinder.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Set;

@Entity
public class Authority {

    @Id
    private String name;

    @ManyToMany(mappedBy = "authorities", fetch = FetchType.LAZY)
    private Set<Users> users;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Users> getUser() {
        return users;
    }

    public void setUser(Set<Users> users) {
        this.users = users;
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override
    public String toString() {
        return "Authority{" +
                "name='" + name + '\'' +
                '}';
    }
}
