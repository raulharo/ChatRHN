package org.example.model;

import java.util.ArrayList;
import java.util.List;

public class GptRequestBodyModel {
    private String model;
    private List<GptMessageModel> Messages = new ArrayList<>();

    public GptRequestBodyModel(String model, List<GptMessageModel> messages) {
        this.model = model;
        Messages = messages;
    }

    public GptRequestBodyModel() {
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public List<GptMessageModel> getMessages() {
        return Messages;
    }

    public void setMessages(List<GptMessageModel> messages) {
        Messages = messages;
    }

    public void addMessage(GptMessageModel message) {
        Messages.add(message);
    }
}
