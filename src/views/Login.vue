<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="danger">
                <ion-title>Login</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input type="password"></ion-input>
            </ion-item>
                <ion-button expand="block" color="danger">Login</ion-button>
        </ion-content>

        <ion-footer></ion-footer>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
} from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonFooter,
        IonItem,
        IonLabel,
        IonInput,
        IonButton
    }
})

</script>

<style scoped>

</style>
