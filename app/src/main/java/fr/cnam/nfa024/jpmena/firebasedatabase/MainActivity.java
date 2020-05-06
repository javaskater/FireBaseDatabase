package fr.cnam.nfa024.jpmena.firebasedatabase;

import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import fr.cnam.nfa024.jpmena.firebasedatabase.firebase.AsyncResponse;
import fr.cnam.nfa024.jpmena.firebasedatabase.firebase.BackgroundOperation;

public class MainActivity extends AppCompatActivity {

    private static final String URLCNAM31 = "https://geolocalisation-indoor.firebaseio.com/buildingmaps/cnamacces31.json";
    private static final String TAG = "MAINFirebase";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void fetchSallesEtMouvements(View v){
        BackgroundOperation backgroundOperation= new BackgroundOperation(
                new AsyncResponse() {
                    @Override
                    public void processFinish(JSONObject cnam31Json) {
                        JSONArray sallesArray = null;
                        JSONArray mouvementsArray = null;
                        try {
                            sallesArray = cnam31Json.getJSONArray("salles");

                            for (int i = 0 ; i < sallesArray.length(); i++) {
                                try {
                                    JSONObject obj = sallesArray.getJSONObject(i);
                                    Integer idSalle = obj.getInt("_id");
                                    String nomSalle = obj.getString("numero_salle");
                                    Log.i(TAG, "Salle de _id:" + idSalle + " et de nom:" + nomSalle);
                                }catch (JSONException e){
                                    Log.w(TAG, "erreur de parsing de l'élément salle "+i+ " cause:"+e.getMessage());
                                    continue;
                                }
                            }
                        }  catch (JSONException e1) {
                            Log.e(TAG, "erreur de parsing JSON des salles:"+ e1.getMessage());
                        }
                        try {
                            mouvementsArray = cnam31Json.getJSONArray("mouvements");

                            for (int i = 0 ; i < mouvementsArray.length(); i++) {
                                try {
                                    JSONObject obj = mouvementsArray.getJSONObject(i);
                                    Integer from = obj.getInt("de");
                                    Integer to = obj.getInt("a");
                                    String mouvement = obj.getString("mouvement");
                                    Log.i(TAG, "On va de (id):" + from + " vers (id):" + to + " via le déplacement:"+mouvement);
                                }catch (JSONException e){
                                    Log.w(TAG, "erreur de parsing de l'élément mouvement "+i+ " cause:"+e.getMessage());
                                    continue;
                                }
                            }
                        }  catch (JSONException e1) {
                            Log.e(TAG, "erreur de parsing JSON des mouvements:"+ e1.getMessage());
                        }
                    }
                }
        );
        backgroundOperation.execute(URLCNAM31);
    }
}
