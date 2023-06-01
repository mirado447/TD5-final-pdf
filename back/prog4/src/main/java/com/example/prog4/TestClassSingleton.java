package com.example.prog4;

public class TestClassSingleton {
    public static void main(String[] args){
        ClassSingleton instance1 = ClassSingleton.getInstance();
        instance1.setDescription("Change info class first");

        ClassSingleton instance2 = ClassSingleton.getInstance();
        instance2.setDescription("Change info class second ");

        System.out.println(instance1.getDescription());
        System.out.println(instance2.getDescription());
    }
}
