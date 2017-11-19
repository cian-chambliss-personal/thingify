# Thingify

An abstract language to describe physical objects.  The purpose is use in a context where only text is available to describe a configration of shapes.

This language has a base set of primative shapes (nouns), and preposition (above / under), adjectives (smaller , larger, green).  Definitions can be used inside other definitions once defined.

The language defines 'types' as a name, followed by an '=', followed by a definition enclosed in square brackets '[]'.

# Example

Define a pinetree shape as a green cone atop a brown cylinder

```
pinetree = [
   cone (large,green) above - cylinder (thinner,brown)
]
```

# Primatives

- Null (placeholder)
- Sphere
- Cube
- Box
- Cone
- Pyramid
- Toroid
- Cylinder

# Preposition

If not specified, shapes are assumed to be touching

- Above  (first shape is directly above second shape)
- Left of (from shapes perspective, second shape is on left)
- Right of (from shapes perspective, second shape is on right)
- Behind (from shapes perspective, second shape is behind)
- in Front (from shapes perspective, second shape is in front )
- Around (first shape is around the second shape)

# Modifiers

- Deeply Embedded (In the the relation the second shape is \* 0.75 inside the first shape)
- Embedded (In the the relation the second shape is \* 0.5 inside the first shape)
- Slightly Embedded (In the the relation the second shape is \* 0.25 inside the first shape)
- Higher (Prefix to Left/Right/Behind/in front indictating vertical position is aligned with top)
- High  (... vertical position is between top and middle)
- Low   (... vertical position is between bottom and middle)
- Lower (... vertical position is at bottom)

# Adjectives and Pronouns

- Bigger  (all dimensions\*2)
- Big     (all dimensions\*1.5)
- Small   (all dimensions\*0.75)
- Smaller (\*0x.5) 
- Thinner (width/depth\*0.5)
- Thin    (width/depth\*0.75) 
- Fat     (width/depth\*1.5)  
- Fatter  (width/depth\*2)
- Narrower  (width\*0.5) 
- Narrow   (width\*0.75) 
- Wide     (width\*1.5)
- Wider    (width\*2.0)
- Shorter    (height\*0.5)
- Short    (height\*0.75)
- Tall     (height\*1.5)
- Taller   (height\*2.0)
- Any well known HTML color (used to shade the shape)





