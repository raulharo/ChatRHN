package org.example.dao;

import org.example.model.GptMessageModel;
import org.example.model.GptRequestBodyModel;

public interface HandlerDao {
    public String promptAi(GptRequestBodyModel conversation);
}
