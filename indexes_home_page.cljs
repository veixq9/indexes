(ns symautre.indexes-home-page
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
            (for [{:keys [url title]} [{:url "https://www.tumblr.com/blog/arrowsfrom"
                                        :title "tumblr"}
                                       {:url
                                        "https://twitter.com/veixq9"
                                        :title "twitter"}
                                       {:title "soundcloud" :url 

                                        "https://soundcloud.com/veixq9"}

                                       {:title "deviantart"
                                        :url "https://www.deviantart.com/likebad"}
                                       

                                       {:title 
                                        "mastodon" :url "https://mastodon.social/"}
                                       
                                       {:title 
                                        "github" :url "https://github.com/veixq9"}
                                       "https://github.com/veixq9"]]
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




