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

                
                {:title  "scissors_4d@twitch.tv"
                 :url "https://www.twitch.tv/scissors_4d/about" }

                {:title  "hoosewatch@twitch.tv"
                 :url "https://www.twitch.tv/hoosewatch/about" }

                {:title  "z2muchmazvhole@twitch.tv"
                 :url "https://www.twitch.tv/z2muchmazvhole/about" }
                ]]
         [:div.w3-container
          [:h1 "VCN88TS"]
          [:hr]

          [:div.w3-container
           #_[:p.w3-xxlarge.w3-italic "links"]
           [:br]
           (into [:div.w3-container]
                 (for [{:keys [url title] :as x} data]
                   (let [icon  (or (:icon x) (str (re-find #"http.*?//.*?/" (:url x)) "favicon.ico"))]
                     [:div.w3-container
                      [:img.w3-cell.w3-round {:src icon
                                              :alt " "
                                              ;; :onerror "this.onerror=null;this.remove();"
                                              :style {:width 16 :height 16}}]
                      [:span " "]
                      [:a {:key url
                           :href url} title]

                      [:br]
                      [:br]])))]])))







(defn ^:dev/after-load init []
  (rd/render [indexes]
             ;; (react-dom/createRoot (js/document.getElementById "main-content"))
             ;; (.-body js/document)
             (js/document.getElementById "main-content")
             ))




