package com.example.prog4;

public class ClassSingleton {
    private static ClassSingleton INSTANCE;
    private String description = "Initial info class";

    private ClassSingleton() {
    }

    public static ClassSingleton getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new ClassSingleton();
        }

        return INSTANCE;
    }

    public static ClassSingleton getINSTANCE() {
        return INSTANCE;
    }

    public static void setINSTANCE(ClassSingleton INSTANCE) {
        ClassSingleton.INSTANCE = INSTANCE;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
