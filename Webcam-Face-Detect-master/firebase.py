import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
cred = credentials.Certificate('C:/Users/Badoo/Desktop/Innovalab/dream-team-9b569-firebase-adminsdk-ej5ec-ee8595ac37.json')
firebase_admin.initialize_app(cred)

db = firestore.client()


doc_ref = db.collection(u'buses').document(u'JMQIwQaezwF5YThrzHRf')
dick = doc_ref.get().to_dict()
dick['num_pessoas'] = dick['num_pessoas']+1
doc_ref.set(dick)


print(u'{} => {}'.format(doc.id, doc.to_dict()))