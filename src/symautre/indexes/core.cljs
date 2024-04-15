(ns symautre.indexes.core
  (:require [reagent.core :as r]
            [reagent.dom :as rd]
            [react]
            [react-dom]
            ))

(defn timer-component []
  (let [seconds-elapsed (r/atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div
       "Seconds Elapsed: " @seconds-elapsed])))


(defn icon
  [state]
  (fn [state]
    (if @state
      [:img {
             :src (:src @state)
             :alt " "
             :on-error (fn [e]
                         (reset! state nil))
             :style {:width 16 :height 16}}]
      [:span " "])))

(defn indexes []
  (fn []
    (let [data [
                {:title "voidnet"
                 :url "https://veixq9.github.io/voidnet/"
                 
                 }
                
                #_{:url "https://www.tumblr.com/blog/arrowsfrom"
                   :title "tumblr"}
                #_{:url
                   "https://twitter.com/vcq88ts50024"
                   :title "twitter"}
                
                #_{:title "soundcloud" :url 
                   "https://soundcloud.com/veixq9"}

                {:title "likebad@deviantart"
                 :url "https://www.deviantart.com/likebad"
                 ;; :icon "https://www.deviantart.com/favicon.ico"
                 }

                
                
                
                ;; {:title 
                ;;  "mastodon" :url "https://mastodon.social/@veixq9"}


                {:title 
                 "vcn88qs@social.mastodon" :url "https://mastodon.social/@vcn88qs"}
                
                
                {:title 
                 "veixq9@github" :url "https://github.com/veixq9"
                 ;; :icon "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                 }

                {:title "nexurdoormat@dlive.tv"
                 :url "https://dlive.tv/nexusdoormat"}                                       
                
                

                {:title "veixq9@com.youtube"
                 :url "https://www.youtube.com/channel/UCokRjvUbxCTFV9pFnGPeVkw"}

                {:title "circuitbrainfile@soundcloud" :url 
                 "https://soundcloud.com/circuitbrainfile"
                 }
                {:title "veix-quadron@soundcloud" :url
                 "https://soundcloud.com/veix-quadron"

                 }
                ;; {:title "veixq9@soundcloud"
                ;;  :url "https://soundcloud.com/veixq9"}

                {:title "veixq5@com.pinterest"
                 :url "https://www.pinterest.de/veixq5/"}

                {:title "nilspore@app.revolt.chat"
                 :description "nilspore@https://app.revolt.chat"
                 :url "https://rvlt.gg/Ac9PKyMf"
                 :icon "https://app.revolt.chat/favicon.ico"}


                ;; {:title  "scissors_4d@twitch.tv"
                ;;  :url "https://www.twitch.tv/scissors_4d/about" }

                

                ;; {:title  "hoosewatch@twitch.tv"
                ;;  :url "https://www.twitch.tv/hoosewatch/about" }

                ;; {:title  "z2muchmazvhole@twitch.tv"
                ;;  :url "https://www.twitch.tv/z2muchmazvhole/about" }

                {:title  "https://www.twitch.tv/z2muchmazvhole/about"
                 :url "https://www.twitch.tv/vcn88qs"}
                ]]
      [:div.w3-container {:style {:font-size "160%"}}
       [:h1 "VCN88TS"]
       [:hr]

       [:div.w3-container
        #_[:p.w3-xxlarge.w3-italic "links"]
        [:br]
        [:div.w3-container
         [:img.w3-center {
                          :style {
                                  :width "20%"
                                  :display :block
                                  :margin-left :auto
                                  :margin-right :auto
                                  }
                          :src
                          "indexes%20qr.png"
                          ;; "indexes/indexes%20qr.png?raw=true"
                          #_"https://github.com/veixq9/indexes/blob/main/public/indexes/indexes%20qr.png?raw=true" }]
         [:table
          [:tbody
           (for [{:keys [url title] :as x} data]
             (let [ico-url (or (:icon x) (str (re-find #"http.*?//.*?/" (:url x)) "favicon.ico"))
                   state (r/atom (assoc x :src ico-url))]
               [:tr {:key (random-uuid)}
                [:td
                 #_[:img {
                          :src (:src @state)
                          :alt " "
                          :on-error (fn [e])
                          :style {:width 16 :height 16}}]
                 [icon state]
                 #_(let [img-id (random-uuid)]
                     [:img {
                            :id img-id
                            :src icon
                            :alt " "
                            :on-error (fn [e]
                                        (-> (js/document.getElementById img-id)
                                            (.-style)
                                            .-visibility
                                            (set! "hidden"))
                                        #_(-> (js/document.getElementById img-id)
                                              (.-src)
                                              (set!  "")))
                            :style {:width 16 :height 16}}])]
                [:td " "]

                [:td [:a {
                          ;; :style
                          ;; {:float :left }
                          :key url
                          :href url} title]]]))]]
         #_[:div.w3-cell-row
            [:img.w3-cell.w3-round {:src icon
                                    :alt " "
                                    ;; :onerror "this.onerror=null;this.remove();"
                                    :style {:width 16 :height 16}}]

            [:a.w3-cell {:style {:float :left } :key url
                         :href url} title]]]]])))







(defn ^:dev/after-load init []
  (rd/render [indexes]
             ;; (react-dom/createRoot (js/document.getElementById "main-content"))
             ;; (.-body js/document)
             (js/document.getElementById "main-content")
             ))




