package fr.cnam.nfa024.jpmena.firebasedatabase.firebase;

import org.json.JSONObject;

public interface AsyncResponse {
    void processFinish(JSONObject output);
}
