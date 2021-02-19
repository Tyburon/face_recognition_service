import sys
import face_recognition

## Importing Necessary Modules
import requests # to get image from the web
import shutil # to save it locally

## Set up the image URL and filename
image_url1 = sys.argv[1]
filename1 = "image1.jpg"

image_url2 = sys.argv[2]
filename2 = "image2.jpg"

# Open the url image, set stream to True, this will return the stream content.
r = requests.get(image_url1, stream = True)

# Check if the image was retrieved successfully
if r.status_code == 200:
    # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
    r.raw.decode_content = True

    # Open a local file with wb ( write binary ) permission.
    with open(filename1,'wb') as f:
        shutil.copyfileobj(r.raw, f)

    # print('Image 1 sucessfully Downloaded: ',filename1)
else:
    print('Image 1 Couldn\'t be retreived')

# Open the url image, set stream to True, this will return the stream content.
r = requests.get(image_url2, stream = True)

# Check if the image was retrieved successfully
if r.status_code == 200:
    # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
    r.raw.decode_content = True

    # Open a local file with wb ( write binary ) permission.
    with open(filename2,'wb') as f:
        shutil.copyfileobj(r.raw, f)

    # print('Image 2 sucessfully Downloaded: ',filename2)
else:
    print('Image 2 Couldn\'t be retreived')


known_image = face_recognition.load_image_file("/home/gabriel/Documents/Programs/Service/image1.jpg")

# Get the face encodings for the known images
know_image_face_encoding = face_recognition.face_encodings(known_image)[0]

known_encodings = [
    know_image_face_encoding,
]

# Load a test image and get encondings for it
image_to_test = face_recognition.load_image_file("/home/gabriel/Documents/Programs/Service/image2.jpg")
image_to_test_encoding = face_recognition.face_encodings(image_to_test)[0]

# See how far apart the test image is from the known faces
face_distances = face_recognition.face_distance(known_encodings, image_to_test_encoding)

for i, face_distance in enumerate(face_distances):
    print(format(face_distance < 0.5))

