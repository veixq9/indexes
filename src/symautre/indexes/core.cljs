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
    [:div.w3-container
     [:h1 "VCN88TS"]
     [:hr]

     [:div.w3-container
      #_[:p.w3-xxlarge.w3-italic "links"]
      [:br]
      (into [:div.w3-container]
            (for [{:keys [url title]} [
                                       #_{:url "https://www.tumblr.com/blog/arrowsfrom"
                                          :title "tumblr"}
                                       {:url
                                        "https://twitter.com/vcq88ts50024"
                                        :title "twitter"}
                                       
                                       #_{:title "soundcloud" :url 
                                          "https://soundcloud.com/veixq9"}

                                       {:title "deviantart"
                                        :url "https://www.deviantart.com/likebad"}
                                       

                                       {:title 
                                        "mastodon" :url "https://mastodon.social/@veixq9"}
                                       
                                       {:title 
                                        "github" :url "https://github.com/veixq9"}

                                       {:title "nexurdoormat@dlive.tv"
                                        :url "https://dlive.tv/nexusdoormat"}                                       
                                       
                                       {:title "voidnet"
                                        :url "https://veixq9.github.io/voidnet/"}

                                       {:title "veixq9@com.youtube"
                                        :url "https://www.youtube.com/channel/UCokRjvUbxCTFV9pFnGPeVkw"}


                                       {:title "veixq9@soundcloud"
                                        :url "https://soundcloud.com/veixq9"}                                       

                                       ]]
              [:div
               [:a {:key url
                    ;;:src url
                    :href url} title]
               [:br]
               [:br]
               ]))]]))

(defn ^:dev/after-load init []
  (rd/render [indexes]
             ;; (react-dom/createRoot (js/document.getElementById "main-content"))
             ;; (.-body js/document)
             (js/document.getElementById "main-content")
             ))




