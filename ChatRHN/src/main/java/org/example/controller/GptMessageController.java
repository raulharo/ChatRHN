package org.example.controller;

import org.example.dao.HandlerDao;
import org.example.model.GptMessageModel;
import org.example.model.GptRequestBodyModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class GptMessageController {
    @Autowired
    private HandlerDao handlerDao;

    @PostMapping(value = "send-message")
    public GptMessageModel sendMessage(@RequestBody GptRequestBodyModel message) {
        for ( GptMessageModel msg : message.getMessages()){
            if(msg.getRole().equals("You")){
                msg.setRole("user");
            }
            else if(msg.getRole().equals("ChatRHN")){
                msg.setRole("assistant");
            }
        }
        GptMessageModel aiMessage = new GptMessageModel();
        aiMessage.setRole("ChatRHN");
        aiMessage.setContent(handlerDao.promptAi(message));
        return aiMessage;
    }
}
