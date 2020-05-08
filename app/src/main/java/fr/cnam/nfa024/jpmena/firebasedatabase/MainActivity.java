package fr.cnam.nfa024.jpmena.firebasedatabase;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.SpannableString;
import android.text.style.ForegroundColorSpan;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import fr.cnam.nfa024.jpmena.firebasedatabase.firebase.AsyncResponse;
import fr.cnam.nfa024.jpmena.firebasedatabase.firebase.SallesAsyncTask;

public class MainActivity extends AppCompatActivity {

    private static final String URLCNAM31 = "https://geolocalisation-indoor.firebaseio.com/buildingmaps/cnamacces31.json";
    private static final String TAG = "MAINFirebase";
    private final int MENU_DOWNLOAD = 1;
    private final int MENU_SETTINGS = 2;

    private TextView mTvBase;
    private Menu mMenu;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mTvBase = (TextView) findViewById(R.id.tvBase);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        menu.add(0, MENU_DOWNLOAD, 0, "Download");
        menu.add(0, MENU_SETTINGS, 0, "Settings");
        this.mMenu = menu;
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        mTvBase.setText("Base: "+ item.getTitle()+ " sélectionnée");
        Toast.makeText(this, "menu "+item.getTitle() +" sélectionné", Toast.LENGTH_LONG).show();
        for(int i = 0; i < mMenu.size(); i++){
            MenuItem mItem = mMenu.getItem(i);
            //Cf. réponse 85 de https://stackoverflow.com/questions/3519277/how-to-change-the-text-color-of-menu-item-in-android
            SpannableString s = new SpannableString(mItem.getTitle());
            if (mItem == item) {
                s.setSpan(new ForegroundColorSpan(Color.GREEN), 0, s.length(), 0);
            } else {
                s.setSpan(new ForegroundColorSpan(Color.BLACK), 0, s.length(), 0);
            }
            mItem.setTitle(s);
        }

        return super.onOptionsItemSelected(item);
    }

    public void fetchSallesEtMouvements(View v){
        SallesAsyncTask backgroundOperation= new SallesAsyncTask(
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
