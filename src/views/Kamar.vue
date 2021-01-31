<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="danger">
                <ion-title>Kamar</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item><ion-label>Kamar 1</ion-label></ion-item>
                <ion-item><ion-label>Kamar 2</ion-label></ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel
} from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonList,
      IonItem,
      IonLabel
  }  
})
</script>

<style scoped>

</style>