(defun calc-fuel (mass) 
  (let ((fuel (- (floor mass 3) 2)))
    (if (> fuel 0) fuel 0)))

(defun calc-fuel-recursive (mass) 
  (if (= mass 0) 0
    (let ((fuel (calc-fuel mass)))
      (+ fuel (calc-fuel-recursive fuel)))))

(defun part1 (masses) (reduce #'+ (mapcar #'calc-fuel masses)))

(defun part2 (masses) (reduce #'+ (mapcar #'calc-fuel-recursive masses)))

(defun get-inputs () 
  (with-open-file (stream "../01-input")
    (loop for line = (read-line stream nil)
          while line
          collect (parse-integer line))))

(format t "~%Part 1: ~D" (part1 (get-inputs)))
(format t "~%Part 2: ~D" (part2 (get-inputs)))
