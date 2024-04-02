import cv2
import librosa
import numpy as np
from pdf2image import convert_from_path
import os

def extract_video_frames(video_path: str,video_source: str, hops=30):
    video = cv2.VideoCapture(video_path)
    cont = 0
    frames = []
    while video.isOpened():
        ret, frame = video.read()
        if not ret:
            break
        if cont % hops == 0:
            frames.append(frame)
        cont += 1
    video.release()
    return frames


def extraer_caracteristicas_audio(audio_path: str,audio_source: str):
    y, sr = librosa.load(audio_source)
    mfcc = librosa.feature.mfcc(y=y, sr=sr)
    nombre_archivo = os.path.basename(audio_source).split('.')[0] 
    ruta_caracteristicas = os.path.join(audio_path, f"{nombre_archivo}_mfcc.npy")
    np.save(ruta_caracteristicas, mfcc)

    

def extract_images(pdf_path: str, pdf_source: str):
    
    imagenes = convert_from_path(pdf_source)
    
    for i, imagen in enumerate(imagenes):
        img_path = f"pagina_{i+1}.jpg"
        imagen.save(os.path.join(pdf_path, img_path))
        print(f"Saved image: {img_path}")


def main(pdf_path: str, video_path: str, audio_path: str, pdf_source: str, video_source: str, audio_source: str):

    # Extract pdf images
    extract_images(pdf_path, pdf_source)
    # Extract video frames
    extract_video_frames(video_path, video_source)
    # Extract audio features
    extraer_caracteristicas_audio(audio_path, audio_source)


if __name__ == "__main__":
    pdf_path = os.path.join("data", "pdfs")
    video_path = os.path.join("data", "videos")
    audio_path = os.path.join("data", "audio")

    pdf_source = ''
    video_source = ''
    audio_source = ''
    main(
        pdf_path = pdf_path, video_path = video_path, audio_path = audio_path, pdf_source = pdf_source, video_source = video_source, audio_source = audio_source    
        )


