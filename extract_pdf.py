import fitz
import os

pdf_path = r'C:\Users\hp\.gemini\antigravity\scratch\ixora-website\images\IXORA.pdf'
out_dir = r'C:\Users\hp\.gemini\antigravity\scratch\ixora-website\images'

doc = fitz.open(pdf_path)
print(f'Total pages: {len(doc)}')

for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    print(f'Page {page_num+1}: {len(images)} embedded images')
    
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        ext = base_image['ext']
        img_data = base_image['image']
        w = base_image['width']
        h = base_image['height']
        fname = os.path.join(out_dir, f'pdf_img_p{page_num+1}_{img_idx+1}.{ext}')
        with open(fname, 'wb') as f:
            f.write(img_data)
        print(f'  Extracted: pdf_img_p{page_num+1}_{img_idx+1}.{ext} ({w}x{h})')
    
    # Render full page as PNG
    pix = page.get_pixmap(dpi=200)
    page_fname = os.path.join(out_dir, f'pdf_page_{page_num+1}.png')
    pix.save(page_fname)
    print(f'  Full page: pdf_page_{page_num+1}.png')

doc.close()
print('Extraction complete!')
